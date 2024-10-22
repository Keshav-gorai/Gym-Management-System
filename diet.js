// Sample diet plans for each meal
const dietPlans = {
    breakfast: [
        "Oatmeal with fruits",
        "Scrambled eggs and toast",
        "Greek yogurt with honey",
        "Smoothie with spinach and banana"
    ],
    lunch: [
        "Grilled chicken salad",
        "Quinoa and vegetables",
        "Salmon and sweet potatoes",
        "Brown rice with lentils"
    ],
    snack: [
        "Apple with peanut butter",
        "Almonds and walnuts",
        "Protein bar",
        "Carrot sticks with hummus"
    ],
    dinner: [
        "Grilled steak and broccoli",
        "Baked fish with asparagus",
        "Chicken stir-fry with quinoa",
        "Vegetable soup with whole grain bread"
    ]
};

// Function to display meal plan based on the button clicked
function getMealPlan(mealType) {
    const mealList = document.getElementById(`${mealType}-list`);
    mealList.innerHTML = '';  // Clear the previous meal plan

    // Get the diet plan for the specified meal type
    const meals = dietPlans[mealType];

    // Populate the list with meal items
    meals.forEach((meal) => {
        const listItem = document.createElement('li');
        listItem.textContent = meal;
        mealList.appendChild(listItem);
    });
}
