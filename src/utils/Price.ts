import {
    SUSHI_OHMDAI_PAIR,
} from './Constants'
import { Address, BigDecimal, BigInt, log } from '@graphprotocol/graph-ts'
import { UniswapV2Pair } from '../../generated/OlympusStakingV1/UniswapV2Pair';
import { toDecimal } from './Decimals'


let BIG_DECIMAL_1E9 = BigDecimal.fromString('1e9')


export function getOHMUSDRate(): BigDecimal {
    let pair = UniswapV2Pair.bind(Address.fromString(SUSHI_OHMDAI_PAIR))

    let reserves = pair.getReserves()
    let reserve0 = reserves.value0.toBigDecimal()
    let reserve1 = reserves.value1.toBigDecimal()
    return reserve1.div(reserve0).div(BIG_DECIMAL_1E9)
}


//(slp_treasury/slp_supply)*(2*sqrt(lp_dai * lp_ohm))
export function getPairUSD(lp_amount: BigInt, pair_adress: string): BigDecimal{
    let pair = UniswapV2Pair.bind(Address.fromString(pair_adress))


    let total_lp = pair.totalSupply()
    let lp_token_1 = pair.getReserves().value0
    let lp_token_2 = pair.getReserves().value1

    let part1 = toDecimal(lp_amount,18).div(toDecimal(total_lp,18))
    let two = BigInt.fromI32(2)
    let part2 = two.times(lp_token_1).times(lp_token_2)
    let sqrt = toDecimal(part2.sqrt(), 12)
    let result = part1.times(sqrt)
    return result
}