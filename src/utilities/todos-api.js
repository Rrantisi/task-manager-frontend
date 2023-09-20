import sendRequest from './send-request';

const BASE_URL = '/todos';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function addTodo(todoData) {
    return sendRequest(`${BASE_URL}/add`, 'POST', todoData)
}

export async function getTodo(todoId, userId) {
    const url = `${BASE_URL}/${todoId}?userId=${userId}`;
    const res = await fetch(url);
    if(res.ok) {
        return res.json();
    } else {
        throw new Error('Invalid Get Todo');
    }
}

export async function updateTodo(todoId, userId, updatedTodo) {
    const url = `${BASE_URL}/update/${todoId}?userId=${userId}`
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTodo)
    });
    if(res.ok) {
        return res.json();
    } else {
        throw new Error('Invalid Get Todo');
    }
}

export async function deleteTodo(todoId) {
    return sendRequest(`${BASE_URL}/delete/${todoId}`, 'DELETE');
}