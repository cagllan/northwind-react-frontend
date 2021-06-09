import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png" />
            <Dropdown pointing="top left" text="Arise">
                <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out" />
                </Dropdown.Menu>
            </Dropdown>
            </Menu.Item>
        </div>
    )
}
