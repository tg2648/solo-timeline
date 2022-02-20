export type CardType = {
      id: string,
      content: string,
      year: number,
}

export type HandType = {
   id: string,
   cardIds: string[],
}

export type GameData = {
   hands: {
      [index: string]: HandType,
   },
   handOrder: string[]
}

export const CARD_COLLECTION: {[index: string]: CardType} = {
   '1': { id: '1', content: 'Card 1', year: 1948},
   '2': { id: '2', content: 'Card 2', year: 1614},
   '3': { id: '3', content: 'Card 3', year: 1914},
   '4': { id: '4', content: 'Card 4', year: 2000},
}

export const initialGameData: GameData = {
   hands: {
      'player': {
         id: 'player',
         cardIds: ['1', '2', '3']
      },
      'timeline': {
         id: 'timeline',
         cardIds: ['4']
      },
   },

   handOrder: ['timeline', 'player'],
}
