import filterPokemon from "./filterPokemon";
import { mockPokemonsData, } from "../mock/pokeData";

describe("Filter Pokemon", () => {
  test("it should return an array", () => {
   // return mockPokemonsData.filter(x=>x);
   let expectedAry = mockPokemonsData.filter(x=>x.name='zangoose');
    expect(filterPokemon(mockPokemonsData,'zangoose')).toEqual(expectedAry);
  });

  test("it should return an empty array", () => {
    /* Your solution comes here */
    let empty=[];
    expect(filterPokemon(mockPokemonsData,"")).toEqual( empty);
  });

  test("it should return an array with charizard object", () => {
    let arrayCharizard = mockPokemonsData.filter(x=>x.name='charizard');
    expect(filterPokemon(mockPokemonsData,"charizard")).toEqual(arrayCharizard);
  });

  // /* BUNUS */
  // test("it should validate the 'pokeList' argument", () => {
   
  //   expect(false).toBe(true);
  // }); 

  // test("it should validate the 'name' argument", () => {
  //   /* Your solution comes here */
  //   expect(false).toBe(true);
  // });
});
