export const calculateCardsPerSlide = (width) => {
    if (width > 1093) {
        return 5
    } else if (width > 893) {
        return 4;
    } else if (width > 693) {
        return 3;
    } else if (width > 493) {
        return 2
    } else {
        return 1
    }
};
