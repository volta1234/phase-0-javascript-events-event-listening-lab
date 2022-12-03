function addingEventListener(a, b) {
    let sum = a+b
    document.getElementById('input').addEventListener('click', function() { sum.bind(this, a, b) });
}