const discountPrice = (input: unknown) => {
    if (typeof input === 'number') {
        const discountPrice = input * 0.1;
        console.log(discountPrice);
    } else if (typeof input === "string") {
        const [discountPrice] = input.split(' ');
        console.log(Number(discountPrice) * 0.1);
    } else {
        console.log('wrong input');
    }
}

discountPrice(100);
discountPrice("100 Tk");
discountPrice(null);