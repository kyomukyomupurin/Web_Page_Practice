"use strict"

$(function() {
    $(function() {
        $('li').hover(function() {
            $(this).css("color", "red");
        }, function() {
            $(this).css("color", "chartreuse");
        });
    });

    $(function() {
        $('#t1').hover(function() {
            $(this).fadeOut(2000);
        }, function() {
            $(this).fadeIn(2000);
        });
    });

    $(function() {
        $('#t2').hover(function() {
            $(this).fadeOut(2000);
        }, function() {
            $(this).fadeIn(2000);
        });
    });
});

function isPrime(n) {
    if (Number.isNaN(n)) {
        return "Input an integer!";
    }
    if (n > 1e14) {
        return "Too large!";
    }
    if (n < 2) {
        return "No";
    }
    for (let i = 2; i * i <= n; ++i) {
        if (n % i == 0) return "No";
    }
    return "Yes";
}

function show() {
    let num = Number(document.getElementById("input").value);
    let res = isPrime(num);
    document.getElementById("result").innerHTML = res;
}