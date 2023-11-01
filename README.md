# 👋 Indonesian Digital Clock

![image](https://github.com/rizkytegar/indonesian-digital-clock/assets/55475891/a655cb47-d8e1-42d5-882c-388b2f0a976e)


A simple project to create a digital clock using Vite and ReactJS. In this project, I have used useState and useEffect, and I have also used [luxon](https://www.npmjs.com/package/luxon) to fetch time based on the time zone.

## Installation

To run this project, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/rizkytegar/indonesian-digital-clock
   ```

2. Navigate to the project directory:

   ```bash
   cd indonesian-digital-clock
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the project:

   ```bash
   npm run dev
   ```

   Open CLI in Another tab, Then Type:

   ```bash
   npm run tailwind
   ```

   See the json script below for more details
   ```json
   "scripts": {
      "dev": "vite",
      "tailwind": "npx tailwindcss -i ./src/App.css -o ./src/style.css --watch ",
      "build": "tsc && vite build && npx tailwindcss build -i ./src/App.css -o ./src/style.css",
      "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      "preview": "vite preview"
   },
   ```

## Contribution

We welcome contributions from the community. If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for the feature or fix you want to contribute:

   ```bash
   git checkout -b new-feature
   ```

3. Make the necessary changes.
4. Commit your changes:

   ```bash
   git commit -m "Add new feature"
   ```

5. Push to your branch:

   ```bash
   git push origin new-feature
   ```

6. Create a Pull Request to the original repository.

## Contributors

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/rizkytegar"><img src="https://avatars.githubusercontent.com/u/55475891?v=4?s=100" width="100px;" alt="Rizky Tegar Pratama"/><br /><sub><b>Rizky Tegar Pratama</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/systm-spec"><img src="https://avatars.githubusercontent.com/u/83221877?v=4?s=100" width="100px;" alt="Stread"/><br /><sub><b>Stread</b></sub></a><br /></td>
             <td align="center"><a href="https://github.com/KathanrDave"><img src="https://avatars.githubusercontent.com/u/108331571?v=4?s=100" width="100px;" alt="KathanrDave"/><br /><sub><b>KathanrDave</b></sub></a><br /></td>
         <td align="center"><a href="https://github.com/ahmadammarm"><img src="https://avatars.githubusercontent.com/u/113039347?v=4?s=100" width="100px;" alt="Ahmad Ammar Musyaffa
"/><br /><sub><b>Ahmad Ammar Musyaffa
</b></sub></a><br /></td>
          <td align="center"><a href="https://github.com/Vswaroop04"><img src="https://avatars.githubusercontent.com/u/97403550?v=4?s=100" width="100px;" alt="Vishnu Swaroop"/><br /><sub><b>Vishnu Swaroop</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

Please feel free to reach out if you have any questions or issues related to this project. Thank you for contributing!
