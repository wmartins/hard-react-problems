const listMock = [{
    id: 'news-1',
    title: 'News 1'
}, {
    id: 'news-2',
    title: 'News 2'
}];

const detailMock = {
    'news-1': {
        title: 'News 1',
        details: 'Amet neque culpa voluptate natus odio, repellat, quisquam. Amet pariatur totam ut quo mollitia velit repellat ullam eum! Iste necessitatibus dolorum quisquam illo corporis nisi! Quam magnam ipsam aut commodi.'
    },
    'news-2': {
        title: 'News 2',
        details: 'Lorem dolore itaque mollitia obcaecati quod, quia vel dicta eius repellendus ullam? Libero aliquid consequuntur commodi mollitia placeat similique. Dolor odit nulla cumque adipisci quis deleniti modi sed dicta perspiciatis.'
    }
};

const randBetween = (min, max) => {
    return Math.random() * (max - min) + min;
}

const getListMock = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listMock);
        }, randBetween(2000, 3000));
    });
}

const getDetailMock = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(detailMock[id]);
        }, randBetween(2000, 3000));
    });
}

export default {
    list: getListMock,
    detail: getDetailMock
};
