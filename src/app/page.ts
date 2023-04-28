export interface BlogPage {
    title: string,
    sections: [{
        title: string,
        paragraphs: [{
            text: string[],
            highlights: [{
                text: string,
                type: string
            }]|undefined,
            cards: [{
                text: string
            }]|undefined
        }]
    }]
}