import { IconButton } from '@mui/material'
import { Telegram, Twitter } from '@mui/icons-material'
import { setPage } from 'actions/uiAction'
import DiscordIcon from 'components/icons/DiscordIcon'
import React from 'react'
import { useDispatch } from 'react-redux'
import BobaLogo from '../../images/boba2/logo-boba2.svg'
import GasSwitcher from '../mainMenu/gasSwitcher/GasSwitcher'
import * as S from './PageFooter.styles'

const PageFooter = () => {
  
  const dispatch = useDispatch();
  
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.FooterLogoWrapper>
          <img
            src={BobaLogo}
            alt="boba logo"
          />
        </S.FooterLogoWrapper>
        <GasSwitcher />
      </S.ContentWrapper>
      <S.FooterDivier />
      <S.FooterLinkWrapper>
        <S.LinkWrapper>
          <S.FooterLink
            onClick={() => {
              dispatch(setPage('Help'))
            }}
          >FAQs</S.FooterLink>
          <S.FooterLink
            onClick={() => {
              dispatch(setPage('Airdrop'))
            }}
          >AirDrop</S.FooterLink>
          <S.FooterLink
            onClick={() => {
              dispatch(setPage('BobaScope'))
            }}
          >System Analytics</S.FooterLink>
          <S.FooterLink
            href="https://blockexplorer.boba.network"
            component="a"
            target="_blank"
            sx={{ whiteSpace: 'nowrap'}}
          >Blockexplorer</S.FooterLink>
          <S.FooterLink
            href="https://docs.boba.network"
            component="a"
            target="_blank"
            sx={{ whiteSpace: 'nowrap'}}
          >Boba Docs</S.FooterLink>
        </S.LinkWrapper>
        <S.FooterDivierMobile />
        <S.SocialWrapper>
          <IconButton href="https://boba.eco/twitter" target='_blank' aria-label="twitter">
            <Twitter sx={{opacity: 0.65}} />
          </IconButton>
          <IconButton href="https://boba.eco/discord" target='_blank' aria-label="discord">
            <DiscordIcon />
          </IconButton>
          <IconButton href="https://boba.eco/telegram" target='_blank' aria-label="telegram">
            <Telegram sx={{opacity: 0.65}} />
          </IconButton>
          <S.FooterLink
            href="https://boba.network"
            component="a"
            target="_blank"
            sx={{ whiteSpace: 'nowrap'}}
          >Boba Websites</S.FooterLink>
        </S.SocialWrapper>
      </S.FooterLinkWrapper>
    </S.Wrapper>
  )
}

export default PageFooter
