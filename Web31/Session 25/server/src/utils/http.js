function asyncHandler(fn) {
  return function wrapped(req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

function publicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.created_at
  };
}

function publicTodo(todo) {
  return {
    id: todo.id,
    title: todo.title,
    description: todo.description,
    completed: Boolean(todo.completed),
    createdAt: todo.created_at,
    updatedAt: todo.updated_at
  };
}

module.exports = { asyncHandler, publicUser, publicTodo };
