import Header from '../components/Header'
import {connect} from 'react-redux'
const mapStateToProps=state =>({
    cardData:state
})
const mapDispatchToProps=dispatch=>({
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)

// export default Home;