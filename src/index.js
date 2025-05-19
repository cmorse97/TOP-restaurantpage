console.log('Hello from index.js')

import './styles.css'
import { image, heading, leadingParagraph } from './pageload.js'

const content = document.getElementById('content')
content.appendChild(image)
content.appendChild(heading)
content.appendChild(leadingParagraph)
