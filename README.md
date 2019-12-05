<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Challenge 1: NodeJS Concepts
</h3>

## :rocket: About the challenge

Create an app to store projects and its tasks from scratch using [Express](https://expressjs.com).

### Routes

- `POST /projects`: This route must receive the `id` and `title` fields in the request body and register a new project inside an array in the following format: `{ id: "1", title: 'New project', tasks: [] }`. Make sure to send both the `id` and the `title` of the project as double-quoted strings;

- `GET /projects`: This route lists all the projects along with its tasks;

- `PUT /projects/:id`: This route must only update the project's title. The `id` must be sent via route parameters;

- `DELETE /projects/:id`: This route must delete the project using the `id` sent via route parameters;

- `POST /projects/:id/tasks`: This route must receive the `title` field and store a new task in the array of the project (defined by the `id` sent via route parameters).

### Example

If I call the `POST /projects` route sending `{ id: 1, title: 'New project' }` and the route `POST /projects/1/tasks` with `{ title: 'New task' }`, the array of projects should look like this:

```js
[
  {
    id: "1",
    title: "New project",
    tasks: ["New task"]
  }
];
```

### Middlewares

- Create a middleware that will be used in all routes that receive the project's ID in the url parameters. The middleware must verify if the project with that ID exists. If it not exists, return an error. Otherwise, allow the request to continue normally;

- Create a global middleware that will be called in all requests. The middleware should print (`console.log`) a count of the requests made to the app since then.

## :memo: License

This project is under the MIT license. Read the [LICENSE](LICENSE.md) file for more details.
