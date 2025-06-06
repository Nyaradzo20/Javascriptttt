# Step 1: Get monthly income
monthlyIncome = float(input("Enter your monthly income: "))

# Step 2: Get fixed expenses
fixedExpenses = float(input("Enter your fixed expenses (e.g. rent): "))

# Step 3: Start variable expenses collection
totalVariableExpenses = 0

while True:
    expenseName = input("Enter a variable expense: ")
    expenseAmount = float(input(f"Enter the amount for {expenseName}: "))
    totalVariableExpenses += expenseAmount

    more = input("Do you want to add another variable expense? YES/NO: ").strip().lower()
    if more != "yes":
        break

# Step 4: Calculate total expenses and remaining budget
totalExpenses = fixedExpenses + totalVariableExpenses
remainingBudget = monthlyIncome - totalExpenses

# Show the result
print(f"\nTotal Expenses: R{totalExpenses}")
print(f"Remaining Budget: R{remainingBudget}")
