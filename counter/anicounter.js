const counter = document.querySelectorAll(".counter");


counter.forEach(counter => {
    const updateCount = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
 
        const inc = target/200; 

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 10);

        } else {
            count.innerText = target;
        }   
    }

    updateCount();

});