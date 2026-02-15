const { ChatOpenAI } = require("@langchain/openai");
const { getVectorStore } = require("./chroma");
const { generateMacroPlan } = require("./calorieEngine");
const model = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0.3,
});

async function generatePlan(user, planType) {
    const vectorStore = await getVectorStore();

    const categoryMap = {
        diet: "nutrition_science",
        workout: "workout_training"
    };

    const retriever = vectorStore.asRetriever({
        k: 4,
        filter: {
            category: categoryMap[planType]
        }
    });

    // ✅ Calculate macros 
    const macros = generateMacroPlan(user);

    // ✅ Retrieval Query Builder
    function buildRetrievalQuery(user, planType, macros) {
        if (planType === "diet") {
            return `
            Nutrition science for ${user.fitnessGoal}.
            ${user.foodPreference} Indian diet.
            Target calories ${macros.calories} kcal.
            Target protein ${macros.protein} grams.
            `;
        }

        if (planType === "workout") {
            return `
            Workout routine for ${user.fitnessGoal}.
            ${user.experienceLevel || "beginner"} lifter.
            ${user.workoutDays || 5} days per week split.
            Body weight ${user.weight}kg.
            `;
        }
    }

    const query = buildRetrievalQuery(user, planType, macros);

    const retrievedDocs = await retriever.invoke(query);

    const context = retrievedDocs
        .map(doc => doc.pageContent)
        .join("\n\n");

    // ✅ Prompt Builder
    function buildPrompt(planType, user, macros, context) {
        if (planType === "diet") {
            return `
You are an expert Indian fitness nutritionist.

User Details:
Workout Type: ${user.workoutType}
Age: ${user.age}
Gender: ${user.gender}
Weight: ${user.weight} kg
Goal: ${user.fitnessGoal}
Dietary Preference: ${user.foodPreference}

Targets:
Calories: ${macros.calories} kcal
Protein: ${macros.protein} g
Carbs: ${macros.carbs} g
Fat: ${macros.fat} g

Knowledge Context:
${context}

IMPORTANT:
Return STRICT JSON only.
Do NOT return explanation.
Do NOT return markdown.
Do NOT return text outside JSON.

Use EXACTLY this structure:

{
  "user_details": {
    "age": number,
    "gender": "string",
    "weight_kg": number,
    "goal": "string",
    "dietary_preference": "string"
  },
  "targets": {
    "calories": number,
    "protein_g": number,
    "carbs_g": number,
    "fat_g": number
  },
  "meal_plan": {
    "breakfast": {
      "food_items": [
        {
          "name": "string",
          "quantity": "string",
          "calories": number,
          "protein_g": number,
          "carbs_g": number,
          "fat_g": number
        }
      ],
      "total": {
        "calories": number,
        "protein": number,
        "carbs": number,
        "fat": number
      }
    },
    "lunch": { same structure as breakfast },
    "snack": { same structure as breakfast },
    "dinner": { same structure as breakfast },

    "daily_totals": {
      "calories": number,
      "protein": number,
      "carbs": number,
      "fat": number
    },

    "suggestions": {
      "additional_snacks": [
        {
          "name": "string",
          "quantity": "string",
          "calories": number,
          "protein": number
        }
      ]
    }
  }
}
`;
        }

        if (planType === "workout") {
            return `
You are an expert Indian strength & conditioning coach.

User Details:
workout type: ${user.workoutType}
Age: ${user.age}
Gender: ${user.gender}
Weight: ${user.weight}kg
Goal: ${user.fitnessGoal}
Experience Level: ${user.fitnessLevel || "Beginner"}
Workout Days: ${user.workoutDays || 5}

if beginner then give 3 exercise per muscle and 1 part a day if intermediate or advance give more than 4 exercise and 2 body parts also add little advanced and more effective exercises
Knowledge Context:
${context}

Return STRICT JSON only in this format:

{
  "planType": "workout",
  "summary": "short explanation",
  "weeklySplit": [
    {
      "day": "Day 1",
      "focus": "Chest",
      "exercises": [
        {
          "name": "Bench Press",
          "sets": 4,
          "reps": "8-10",
          "rest": "90 seconds"
        }
      ]
    }
  ]
}
`;
        }
    }

    const prompt = buildPrompt(planType, user, macros, context);

    const response = await model.invoke(prompt);

    return response.content;
}
module.exports = { generatePlan }