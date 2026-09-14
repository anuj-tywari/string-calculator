# **String Calculator App**

A full-stack application that implements the **String Calculator** logic using **NestJS** for the backend and **React.js** for the frontend. The application supports addition of numbers provided as a string, with features like custom delimiters, handling of newlines, and error handling.

---

## **Features**

### Backend Features:
1. Returns `0` for an empty string.
2. Supports:
   - Single number inputs (e.g., `"1"` → `1`).
   - Multiple numbers separated by commas (`,`).
   - Numbers separated by newlines (`\n`).
3. Allows custom delimiters (e.g., `"//;\n1;2"` → `3`).
4. Handles multi-character and multiple custom delimiters (e.g., `"//[***][%]\n1***2%3"` → `6`).
5. Throws an error for negative numbers, listing all negatives in the exception message.
6. Ignores numbers greater than or equal to `1000`.

### Frontend Features:
1. A simple user interface to input strings of numbers.
2. Displays the calculated sum or errors from the backend.
3. Supports real-time interaction with the backend API.

---

## **Installation**

### Prerequisites:
- **Docker** and **Docker Compose**
- **Node.js** (v18+) (for local development)
- **npm** or **yarn** (for local development)

---

### **Run with Docker**

1. **Build and Run the Application**:
   ```bash
   docker-compose up --build
   ```

2. Access the **frontend** at [http://localhost:3001](http://localhost:3001).

3. Access the **backend** at [http://localhost:3000](http://localhost:3000).

4. **Stop the Containers**:
   ```bash
   docker-compose down
   ```

---

### **Local Development**

#### Backend:
1. Navigate to the backend directory:
   ```bash
   cd string-calculator-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the backend:
   ```bash
   npm run start
   ```

4. Access the backend API at [http://localhost:3000](http://localhost:3000).

#### Frontend:
1. Navigate to the frontend directory:
   ```bash
   cd string-calculator-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the frontend:
   ```bash
   npm start
   ```

4. Access the frontend at [http://localhost:3001](http://localhost:3001).

---

## **API Endpoints**

### **POST /string-calculator/add**
#### Description:
Accepts a string of numbers and returns the sum.

#### Request Body:
```json
{
  "numbers": "string"
}
```

#### Examples:
- **Input**: `"1,2,3"` → **Output**: `6`
- **Input**: `"//;\n1;2"` → **Output**: `3`
- **Input**: `"1,-2,3"` → **Error**: `"Negative numbers not allowed: -2"`

---

## **Frontend Design**

The frontend interface:
- An input field to enter strings of numbers.
- A "Calculate" button to send the input to the backend.
- Displays the result or any errors from the backend.

---

## **Testing**

### Backend Tests:
Run unit tests for the backend:
```bash
cd string-calculator-backend
npm run test
```

### Frontend Tests:
If applicable, run frontend tests:
```bash
cd string-calculator-frontend
npm run test
```

---

## **Future Enhancements**
1. Enhance the frontend with more advanced UI designs.
2. Add support for additional backend operations (e.g., subtraction, multiplication).
3. Extend input formats to support arrays or other data types.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **Developer**
This project was created and maintained by:

**Anuj Tiwari**

- **Role**: Full-Stack Developer (Backend Heavy)
- **Skills**: NestJS, React.js, Docker, API Design, TDD
- **Contact**: [LinkedIn](https://www.linkedin.com/in/tywari) | [Email](mailto:tywaryanuj83@gmail.com)

---
Let me know if you need additional sections or any further clarification! 🚀