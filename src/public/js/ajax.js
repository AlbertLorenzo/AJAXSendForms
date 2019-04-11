// La idea es que ésta función maneje todas las peticiones AJAX
const ajaxRequest = (data, method, action) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(`${method}`, `${action}`);
        xhr.onload = () => { resolve(xhr.responseText); };
        xhr.onerror = () => { reject(xhr.responseText); };
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(data);
    });
};

const serializeForm = (form) => {
    const jsonObject = {};
    const formData = new FormData(form);
    formData.forEach((value, index) => { jsonObject[index] = value });
    return JSON.stringify(jsonObject);
}

const handlePromise = (promise) => {
    Promise.resolve(promise).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
}

const handleAsyncFunction = async (fnt) => {
    const response = await fnt;
    console.log(response);
}

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            const serializedForm = serializeForm(form);
            event.preventDefault();
            handleAsyncFunction(ajaxRequest(serializedForm, form.getAttribute('method'), form.getAttribute('action')));
        });
    });
});