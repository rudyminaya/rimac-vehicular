export type FontSize =
    | 'xs'
    | 'sm'
    | 'normal'
    | 'md'
    | 'lg'
    | 'large'
    | 'xl'
    | 'xxl'
    | 'big'
    | '3xl'

const getFontSize = (size: FontSize): number => {
    switch (size) {
        case 'xs':
            return 10

        case 'sm':
            return 12

        case 'normal':
            return 14

        case 'md':
            return 16

        case 'lg':
            return 18

        case 'large':
            return 20

        case 'xl':
            return 24

        case 'xxl':
            return 28

        case 'big':
            return 36

        case '3xl':
            return 40
    }
}

export default getFontSize
