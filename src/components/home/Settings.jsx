import { motion } from "framer-motion"
import { useState } from "react"
import { HiOutlineDotsHorizontal, HiOutlineX } from "react-icons/hi"
import { LuUser2 } from "react-icons/lu"
import { IoIosLogOut } from "react-icons/io"
import styled from "styled-components"

export const Settings = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <SettingsButton
        $isopen={isOpen}
        onClick={() => setIsOpen((state) => !state)}
      >
        <HiOutlineDotsHorizontal />
      </SettingsButton>
      <SettingsContainer
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            right: "2em",
            top: "1em",
            minWidth: "13em",
            width: "auto",
            height: "auto",
          },
          closed: {
            right: "3em",
            top: "2em",
            width: "0em",
            height: "0em",
          },
        }}
      >
        {isOpen && (
          <>
            <LoginContainer>
              <LuUser2 />
              Login
            </LoginContainer>
            <ButtonClose onClick={() => setIsOpen(false)} />
          </>
        )}
        {isOpen && <OptionsContainer>{children}</OptionsContainer>}
        {isOpen && (
          <>
            <LogoutContainer>
              Sair <IoIosLogOut />
            </LogoutContainer>
          </>
        )}
      </SettingsContainer>
    </>
  )
}

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5em;

  padding-inline: 1em;
  padding-block: 1em;
`

const LogoutContainer = styled.div`
  width: calc(100% - 2em);

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1em;
  padding-block: 0.4em;
  padding-inline: 1em;

  border-top: 1px solid var(--home-settings-line);

  svg {
    color: var(--home-settings-logout);

    width: 1.7em;
    height: 1.7em;
  }
`
const LoginContainer = styled.div`
  width: calc(100% - 1em);

  display: flex;
  align-items: center;
  justify-content: start;

  gap: 1em;
  padding-block: 0.6em;
  padding-left: 1em;

  border-bottom: 1px solid var(--home-settings-line);

  svg {
    background-color: var(--home-background);

    width: 1.7em;
    height: 1.7em;
    padding: 0.2em;

    border-radius: 50%;
  }
`

const ButtonClose = styled(HiOutlineX)`
  position: absolute;

  top: 0.5em;
  right: 0.5em;

  width: 1.5em;
  height: 1.5em;

  cursor: pointer;
`

const SettingsContainer = styled(motion.div)`
  position: fixed;
  background-color: var(--home-card-background);

  font-size: 1.1em;

  display: flex;
  flex-direction: column;
  align-items: start;

  border-radius: 1em;

  box-shadow: 0em 0em 1em 0em #0000004b;
  overflow: hidden;

  z-index: 1;
`

const SettingsButton = styled(motion.button)`
  position: fixed;
  display: ${(props) => (props.$isopen ? "none" : "flex")};
  align-items: center;
  justify-content: center;

  right: 2em;
  top: 1em;

  background-color: transparent;

  border: none;
  border-radius: 2em;

  padding: 0.5em;

  &:hover {
    background-color: var(--home-card-background);
  }

  cursor: pointer;

  svg {
    color: var(--home-card-color);

    width: 2em;
    height: 2em;
  }
`
