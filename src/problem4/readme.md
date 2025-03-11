# Problem 4 - 99 Tech Code Challenge

## Task

Develop a backend server with ExpressJS. You are required to build a set of CRUD interface that allow a user to interact with the service. You are required to use TypeScript for this task.

1. Interface functionalities:
    1. Create a resource.
    2. List resources with basic filters.
    3. Get details of a resource.
    4. Update resource details.
    5. Delete a resource.
2. You should connect your backend service with a simple database for data persistence.
3. Provide `README.md` for the configuration and the way to run application.

## API Endpoints

This project provides the following API endpoints:

- `GET /customers`: Retrieves a list of all customers.
- `GET /customers/{id}`: Retrieves a specific customer by ID.
- `POST /customers`: Creates a new customer.
- `PUT /customers/{id}`: Updates an existing customer.
- `DELETE /customers/{id}`: Deletes a customer.

### API Parameters and Query Options

#### `GET /customers`
- **Query Parameters:**
  - `name` (optional): The name of the customer to filter by.

#### `GET /customers/{id}`
- **Path Parameters:**
  - `id` (required): The ID of the customer to retrieve.

#### `POST /customers`
- **Body Parameters:**
  - `name` (required): The name of the customer.

#### `PUT /customers/{id}`
- **Path Parameters:**
  - `id` (required): The ID of the customer to update.
- **Body Parameters:**
  - `name` (required): The new name of the customer.

#### `DELETE /customers/{id}`
- **Path Parameters:**
  - `id` (required): The ID of the customer to delete.

## Configuration

This project uses a `.env` file for configuration. Make sure to create a `.env` file in the root directory of the project with the following configuration:

```
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_SCHEMA=public
POSTGRES_USER=postgres
POSTGRES_PASSWORD=
POSTGRES_DB=
```

Replace your database information in the `.env` file.

## How to Run

Before running this project, make sure you have the following prerequisites:

- Node.js installed on your machine.
- PostgreSQL database set up and running.

To run this project, follow these steps:

1. Install the necessary dependencies by running the following command in the terminal:

```bash
npm install
```

2. Run database migrations using Prisma by running the following command:

```bash
npx prisma migrate deploy
```

3. Start the application by running the following command:

```bash
npm start
```

This will start the application and make it accessible at `http://localhost:3000`.
