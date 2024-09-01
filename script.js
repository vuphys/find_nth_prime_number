function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function findNthPrime() {
    const n = parseInt(document.getElementById('nValue').value);
    if (isNaN(n) || n < 1) {
        document.getElementById('result').innerText = "Please enter a valid positive integer.";
        return;
    }
    
    let count = 0;
    let num = 1;
    let nthPrime = 0;

    while (count < n) {
        num++;
        if (isPrime(num)) {
            count++;
            nthPrime = num;
        }
    }

    document.getElementById('result').innerText = `The ${n}th prime number is: ${nthPrime}`;
}