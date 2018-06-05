export default {
  createQuizQuestions: function (category) {

    switch (category) {
      case 'General Knowledge':
        category = 9
        break
      case 'Books':
        category = 10
        break
      case 'Film':
        category = 11
        break
      case 'Music':
        category = 12
        break
      case 'Musicals & Theatres':
        category = 13
        break
      case 'Television':
        category = 14
        break
      case 'Video Games':
        category = 15
        break
      case 'Board Games':
        category = 16
        break
      case 'Science & Nature':
        category = 17
        break
      case 'Computers':
        category = 18
        break
      case 'Mathematics':
        category = 19
        break
      case 'Mythology':
        category = 20
        break
      case 'Sports':
        category = 21
        break
      case 'Geography':
        category = 22
        break
      case 'History':
        category = 23
        break
      case 'Politics':
        category = 24
        break
      case 'Art':
        category = 25
        break
      case 'Celebrities':
        category = 26
        break
      case 'Animals':
        category = 27
        break
      case 'Vehicles':
        category = 28
        break
      case 'Comics':
        category = 29
        break
      case 'Gadgets':
        category = 30
        break
      case 'Japanese Anime & Manga':
        category = 31
        break
      case 'Cartoon & Animations':
        category = 32
        break

      default:
        category = 27
    }

    // switch (difficulty) {
    //   case 'Easy':
    //     difficulty = 'easy'
    //     break
    //   case 'Medium':
    //     difficulty = 'medium'
    //     break
    //   case 'Hard':
    //     difficulty = 'hard'
    //     break

    //   default: 
    //     difficulty = 'easy'
    // }

    console.log('api category: ', category)

    const url = 'https://opentdb.com/api.php?amount=1&category=' + category + '&difficulty=easy&type=multiple'

    return fetch(url)
      .then((res) => {
        console.log(res)
        return res.json()
      })
  },

  playNow: function() {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986'

    return fetch(url)
      .then((res) => {
        console.log('play now res: ', res)
        return res.json()
      })
  }
}