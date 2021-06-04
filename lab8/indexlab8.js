const { Observable } = rxjs;

window.onload = function() {
    document.getElementById('buttonlist').onclick = function() {
        let length = document.getElementById('employeelengthlist').value;
        Observable.create(observer => {
            fetch('https://randomuser.me/api/?results=' + length)
                .then(response => response.json())
                .then(data => {
                    observer.next(data.results);
                    observer.complete();
                })
                .catch(err => observer.error(err));
        }).