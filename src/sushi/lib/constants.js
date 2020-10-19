import React from 'react';
import BigNumber from 'bignumber.js/bignumber'
//import roseFlower from '../../assets/img/rose_flower.svg'
//import blueFlower from '../../assets/img/blue_flower.svg'
import greenFlower from '../../assets/img/green_flower.svg'
//import blueGreenFlower from '../../assets/img/blue_green_flower.svg'
import creamFlower from '../../assets/img/cream_flower.svg'
//import redYellowFlower from '../../assets/img/red_yellow_flower.svg'
//import tealFlower from '../../assets/img/teal_flower.svg'
import yellowFlower from '../../assets/img/yellow_flower.svg'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const contractAddresses = {
  sushi: {
    100: '0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9',
  },
  weth: {
    100: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
  },
  factory: {
    100: '0xE29DCD715D11455194D7d74c622F3c42C8a37040'
  }
}

/*
 * UNI-V2 LP Address on xDai
 * ==========================================
 * HNY/WXDAI  0x4505b262dc053998c10685dc5f9098af8ae5c8ad
 * HNY/STAKE  0x298c7326a6e4a6108b88520f285c7dc89403347d
 * HNY/WETH   0x89e2f342b411032a580fefa17f96da6a5bef4112
 * TRIPS-WXDAI 0x5426a4d0926d6cd2c003241d8fb1c9420e43ed26
*/

export const knownPools = {
  '0x8520fc4c282342f8e746b881b9b60c14f96a0fab': {
    name: 'Dai Daisies',
    icon: <img src={creamFlower} alt="" />
  },
  '0xa6c55971f21cc1c35ea617f47980d669a0c09cf3': {
    name: 'STAKE Sunflower',
    icon: <img src={yellowFlower} alt="" />
  },
  '0x0de3239086dbf7edf17805107cae89b0c1a2db37': {
    name: 'Ether Eucalyptus',
    icon: <img src={greenFlower} alt="" />,
  }
     '0xb1b733f5cbf854e280855928282f9c56e2ce520d': {
    name: 'TRIPS Daisies',
    icon: <img src={greenFlower} alt="" />
  },
}
