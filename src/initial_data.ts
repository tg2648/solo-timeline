export type CardType = {
      id: string,
      content: string,
}

export type HandType = {
   id: string,
   cardIds: string[],
}

export type GameData = {
   cards: {
      [index: string]: CardType
   },
   hands: {
      [index: string]: HandType,
   },
   handOrder: string[]
}


export const initialGameData: GameData = {
   cards: {
      'card-1': { id: 'card-1', content: 'Card 1'},
      'card-2': { id: 'card-2', content: 'Card 2'},
      'card-3': { id: 'card-3', content: 'Card 3'},
      'card-4': { id: 'card-4', content: 'Card 4'},
   },

   hands: {
      'player': {
         id: 'player',
         cardIds: ['card-1', 'card-2', 'card-3']
      },
      'timeline': {
         id: 'timeline',
         cardIds: ['card-4']
      },
   },

   handOrder: ['timeline', 'player'],
}
