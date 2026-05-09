//generic function

const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithObject = (value: { id: number; name: string }) => {
    return [value];
}