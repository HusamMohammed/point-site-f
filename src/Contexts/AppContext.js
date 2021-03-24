import React from 'react'

const AppContext = React.createContext({
	mobileMenu: false,
	toggleMobileMenu: () => {},
})

export default AppContext
