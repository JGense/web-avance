import SncfSearch from "./SncfSearch";

it('is instanciated with a state listOfStation', function () {
    const obj = new SncfSearch();
    expect(obj.state.listOfStation).toEqual([]);
});
