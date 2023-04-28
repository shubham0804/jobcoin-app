import { faker } from "@faker-js/faker";

export const dummyTransactionList = (address) => {
    const transactionList = [];

    for (let i = 1; i <= 6; i++) {
        transactionList.push({
            from: !!i % 2 ? address : faker.name.firstName(),
            to: !i % 2 ? address : faker.name.firstName(),
            amount: faker.datatype.number({
                min: 1,
                max: 9999,
            }),
            hash: faker.finance.ethereumAddress(),
            nounce: faker.datatype.number({
                min: 50,
                max: 9999,
            }),
            datetime: faker.date.past(1).toString(),
        });
    }

    return transactionList;
};

export const dummyBalance = () =>
    faker.datatype.number({
        min: 100,
        max: 9999,
    });
