# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Multi-Step Form Project
### Overview
This project is a responsive multi-step form built with React. It guides users through a series of steps to collect personal information, select a subscription plan, choose add-ons, review a summary, and confirm their choices. The form includes validation, dynamic pricing, and a final thank-you screen.

### Features
1. Step Navigation
Users progress through four main steps and a final thank-you screen.
Step indicators at the top show progress and allow navigation (with validation).
2. Form Validation
Step 1: Users must fill in all required fields (name, email, phone) before proceeding.
Validation errors are displayed under each input.
Navigation to other steps is blocked until all fields are valid.
3. Plan Selection
Step 2: Users choose a subscription plan (Arcade, Advanced, Pro).
Toggle between monthly and yearly billing.
Plan prices update dynamically based on billing period.
4. Add-Ons Selection
Step 3: Users can select multiple add-ons to enhance their plan.
Add-ons are checkable via both button and checkbox.
Add-on prices update based on billing period.
5. Summary & Total Calculation
Step 4: Displays a summary of the selected plan, billing period, and chosen add-ons.
Shows individual prices and calculates the total cost (plan + add-ons).
Users can go back and edit choices before confirming.
6. Thank You Screen
Step 5: Displays a thank-you message after confirmation.
7. Responsive Design
The form is styled for both desktop and mobile screens using SCSS.

### How It Works
State Management: All form data, errors, selections, and navigation are managed in the main App.jsx component.
Validation: Only allows progression if required fields are filled.
Dynamic Pricing: Plan and add-on prices change based on monthly/yearly selection.
Summary: All user selections are summarized before confirmation.
Reusable Components: Each step is a separate React component for clarity and maintainability.
Getting Started
Install dependencies:
npm install

### Run the app:
npm start

### Usage:

Fill out your personal info.
Select a plan and billing period.
Choose any add-ons.
Review your summary and confirm.

### File Structure
App.jsx — Main logic and state management.
step1.jsx — Personal info form.
step2.jsx — Plan selection.
step3.jsx — Add-ons selection.
step4.jsx — Summary and total calculation.
thankYou.jsx — Thank-you screen.
sass — SCSS styles.

### Customization
Add new plans or add-ons: Update the arrays in App.jsx.
Change validation: Edit the validateForm function in App.jsx.
Style: Modify SCSS files in sass.

Enjoy using the Multi-Step Form!
