window.onload = async function() {
    await displayUserInHtml();

    document.getElementById('refreshbutton').onclick = async function() {
        await displayUserInHtml();
    }

}

async function displayUserInHtml() {
    const employeeDiv = document.getElementById('employee-list');
    employeeDiv.innerHTML = '';
    const userArr = await fetchUsers(3);
    userArr.forEach(user => {
        let template = `     
            <div class="col">
                <img src="${user.picture.large}" />
            </div>
            <div class="col">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>phone: ${user.phone}</p>
                <p>${user.email}</p>
            </div>     
        `;
        const div = document.createElement('div');
        div.classList = 'row border-top';
        div.innerHTML = template;
        employeeDiv.appendChild(div);
    });
}