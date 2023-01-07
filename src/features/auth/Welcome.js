import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFilePen,
    faUserGear,
    faFileCirclePlus,
    faUserPlus
} from "@fortawesome/free-solid-svg-icons"

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`RepairNotes: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p className='time__today'>{today}</p>

            <h1>Welcome {username}!</h1>
            <div className='link__icon'>
                <div>
                    <Link to="/dash/notes"><p className='faFilePen'><FontAwesomeIcon icon = {faFilePen} /></p><p className='link__name'>View techNotes</p></Link>
                </div>
                <div>
                    <Link to="/dash/notes/new"><p className='faFileCirclePlus'><FontAwesomeIcon icon = {faFileCirclePlus} /></p><p className='link__name'>Add New techNote</p></Link>
                </div>
                <div>
                    {(isManager || isAdmin) && <Link to="/dash/users"><p className='faUserGear'><FontAwesomeIcon icon = {faUserGear} /></p><p className='link__name'>View User Settings</p></Link>}
                    
                </div>
                <div>
                    {(isManager || isAdmin) && <Link to="/dash/users/new"><p className='faUserPlus'><FontAwesomeIcon icon = {faUserPlus} /></p><p className='link__name'>Add New User</p></Link>}
                </div>
            </div>
        </section>
    )

    return content
}
export default Welcome