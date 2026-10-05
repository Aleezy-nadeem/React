React Learning notes Lecture 03

This README contains the concepts, features, and practical things I learned while building and practicing my React application.

📚 Topics I Learned
1. React Basics
What React is and why it is used.
How to create a React application.
Understanding components.
Understanding JSX.
Importing and exporting components.
Organizing components inside a components folder.
2. React Components

I learned how to create reusable components such as:

Navbar
Home
About
TextForm

Example structure:

src/
├── App.js
├── index.js
├── index.css
└── components/
    ├── Navbar.js
    ├── About.js
    └── TextForm.js

Components make the application easier to organize and maintain.

3. Navbar

I created a reusable navigation bar for the application.

The Navbar contains links/buttons for pages such as:

Home
About

I also learned how to connect different components/pages through the navigation.

4. About Page

I created an About page as a separate React component.

The About page can be imported into App.js and displayed as part of the application.

5. Home Page

I worked on the Home page and connected different components with the main application.

The Home page contains the main text-processing functionality.

⚛️ React Props

Props are used to pass data from one component to another.

They allow a parent component to send information to a child component.

Example:

<Navbar title="TextUtils" />

The component can receive the value through props:

function Navbar(props) {
    return <h1>{props.title}</h1>;
}
Key Point

Props = data passed from parent component to child component.

Props are generally read-only inside the child component.

🔄 React State

I learned about React state and how it allows a component to store and update information.

Example:

const [text, setText] = useState("");

Here:

text = current value
setText = function used to update the value
useState("") = initial value

When state changes, React updates the component.

Key Point

State = information/data that can change inside a component.

🖱️ Event Listeners / Event Handling

I learned how to handle user actions such as:

Click
Change
Submit
Input

Example:

<button onClick={handleClick}>
    Click Me
</button>

For a text area:

<textarea onChange={handleChange}></textarea>

React uses event handlers such as:

onClick
onChange
onSubmit
onMouseOver
📝 Text Area

I created a text area where users can enter text.

The entered text is connected to React state.

Example:

<textarea
    value={text}
    onChange={handleChange}
></textarea>

This allows React to keep track of what the user types.

🔢 Word Count

I learned how to count the number of words entered by the user.

For example:

Hello World

Word count:

2 words

The count can be calculated from the text stored in state.

🔤 Character Count

I learned how to count characters in the text area.

Example:

Hello

Character count:

5 characters

This can be calculated using:

text.length
⏱️ Reading Time

I learned how to calculate an estimated reading time for the entered text.

A simple calculation can use the average reading speed in words per minute.

Example:

Reading time = number of words / words per minute

This gives the user an estimated time required to read the text.

🌙 Light Mode / Dark Mode

I implemented a color mode change feature.

The user can switch between:

Light Mode
Dark Mode

The mode can be controlled using React state.

Example:

const [mode, setMode] = useState("light");

Then the mode can be changed when the user clicks a button.

🧹 Text Processing Features

I practiced different text-processing operations such as:

Convert text to uppercase
Convert text to lowercase
Clear text
Copy text
Remove extra spaces
Count words
Count characters
Calculate reading time
📋 Copy Text

I learned how to allow the user to copy the text from the text area.

This improves usability because the user does not have to manually select the entire text.

🗑️ Clear Text

I created a clear button that removes all text from the text area.

Example:

setText("");

This resets the text state.

🔗 Working With Multiple Components

I learned how different components work together.

For example:

App.js
   │
   ├── Navbar
   │
   ├── Home / TextForm
   │
   └── About

App.js acts as the main component that connects different parts of the application.

📁 Git & GitHub

I also learned how to upload my React project to GitHub.

Check Changes
git status

This shows which files have changed.

Example:

modified: App.js
new file: About.js
modified = an existing file was changed.
new file = a new file was created.
Upload All Changes Together

I learned that I do not need to upload every file separately.

If I create a new file and modify other files at the same time, I can upload everything together:

git add .
git commit -m "Add About page"
git push

For example:

About.js     → new file
App.js       → modified
Navbar.js    → modified
index.css    → modified

All of these changes can be pushed together.

💡 Important Git Commands
See Current Status
git status
Add All Changes
git add .
Create a Commit
git commit -m "Add About page"
Upload to GitHub
git push
Get Latest Changes From GitHub
git pull origin main --rebase