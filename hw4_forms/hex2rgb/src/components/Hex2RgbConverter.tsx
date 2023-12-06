import { useState } from 'react'

const Hex2RgbConverter = () => {
  const [state, setState] = useState({
    inputColor: "#979797",
    isError: false
  });

  let isValidHex = (hex: string): boolean => {
    if (!hex || hex.length !== 7) {
      return false;
    }

    if (!hex.toLowerCase().match(/#[a-f0-9]{6}/)) {
      return false;
    }

    return true;
  }

  let onChangeColor = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target, errorColor = "#e94b35";
    if (value.length >= 7) {
      if (isValidHex(value)) {
        setState({ inputColor: value, isError: false });
      } else {
        setState({ inputColor: errorColor, isError: true })
      }
    }
  }

  type TRgbColor = {
    R: number,
    G: number,
    B: number,
  }

  let hex2decimal = (hex: string): number => {
    let sum = 0;

    let transferSymbols = (symb: string): number | null => {
      switch (symb) {
        case 'a': return 10;
        case 'b': return 11;
        case 'c': return 12;
        case 'd': return 13;
        case 'e': return 14;
        case 'f': return 15;
        default: return null
      }
    }

    let hexLength = hex.length;
    for (let i = 0; i < hexLength; i++) {
      let symb = hex[hexLength - 1 - i].toLowerCase();

      let iNum = (transferSymbols(symb) || parseInt(symb));
      sum += iNum * (16 ** i);
    }

    return sum;
  }

  let convertHex2Rgb = (hex: string): TRgbColor | null => {
    if (!isValidHex(hex)) {
      return null;
    }

    let matches = hex.toLowerCase().replace(/#/, '').match(/[a-f0-9]{2}/g);
    if (!matches || matches.length !== 3) {
      return null;
    }

    let [hR, hG, hB] = matches;
    return {
      R: hex2decimal(hR),
      G: hex2decimal(hG),
      B: hex2decimal(hB),
    }
  }

  let printHexAsRgb = (hex: string): string => {
    if (!state.isError) {
      let rgb = convertHex2Rgb(hex);
      if (rgb !== null) {
        let { R, G, B } = rgb;

        return `rgb(${R}, ${G}, ${B})`;
      }
    }

    return "Ошибка!";
  }

  return (
    <div className="form-container" style={{ backgroundColor: state.inputColor }}>
      <form>
        <div>
          <input
            id="color"
            name="inputColor"
            placeholder={state.inputColor}
            onChange={onChangeColor}
            maxLength={7} />
          <label htmlFor="color"><span>{printHexAsRgb(state.inputColor)}</span></label>
        </div>
      </form>
    </div>
  )
}

export default Hex2RgbConverter