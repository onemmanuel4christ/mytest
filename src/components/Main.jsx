import styled from "styled-components";
import Headerbody from "./Header"


const MainBody = () =>{
    return(
        <Main>
            <Headerbody/>
                <Head>
                    <Button>
                        <span>+</span> Add sale
                    </Button>
                    <Select>
                    <option value="" disabled selected>
                        Month
                        </option>
                        <option value="jan">January</option>
                    <option value="jan">February </option>
                    <option value="jan">March </option>
                    <option value="jan">April </option>
                    <option value="jan">May </option>
                    <option value="jan">June </option>
                    <option value="jan">July </option>
                    <option value="jan">August </option>
                    <option value="jan">September </option>
                    <option value="jan">October </option>
                    <option value="jan">November </option>
                    <option value="jan">December </option>
                </Select>
                </Head>

                <Table>
        <tr>
          <th>
            <input type="checkbox" id="check" name="check" value="check" />
          </th>
          <th>Sales ID</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Sales total</th>
          <th>Amount paid</th>
          <th>Status</th>
          <th></th>
        </tr>
        {Array(2)
          .fill("")
          .map(() => (
            <>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="check"
                    name="check"
                    value="check"
                  />
                </td>
                <td>#123456678</td>
                <td>Jun 04, 2021</td>
                <td>Walk in</td>
                <td>4,520,000. 00</td>
                <td>4,520,000. 00</td>
                <td>
                  <Badge
                    shadow="2px 2px 8px rgba(133, 212, 91, 0.3)"
                    color="#488925"
                    bg="#e2f5d8"
                  >
                    Completed
                  </Badge>
                </td>
                <td>
                  <svg
                    width="4"
                    height="22"
                    viewBox="0 0 4 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                    <circle cx="2" cy="11" r="2" fill="#C4C4C4" />
                    <circle cx="2" cy="20" r="2" fill="#C4C4C4" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="check"
                    name="check"
                    value="check"
                  />
                </td>
                <td>#123456678</td>
                <td>Jun 04, 2021</td>
                <td>Walk in</td>
                <td>4,520,000. 00</td>
                <td>4,520,000. 00</td>
                <td>
                  <Badge
                    shadow="2px 2px 8px rgba(199, 0, 57, 0.2);"
                    color="#C70039"
                    bg="#FFDDE7"
                  >
                    Pending
                  </Badge>
                </td>
                <td>
                  <svg
                    width="4"
                    height="22"
                    viewBox="0 0 4 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                    <circle cx="2" cy="11" r="2" fill="#C4C4C4" />
                    <circle cx="2" cy="20" r="2" fill="#C4C4C4" />
                  </svg>
                </td>
              </tr>
            </>
          ))}
      </Table>
    </Main>
    )
}

const Badge = styled.span`
  background: ${(props) => props.bg && props.bg};
  box-shadow: ${(props) => props.shadow && props.shadow};
  border-radius: 100px;
  color: ${(props) => props.color && props.color};
  padding: 2px 10px;
  font-size: 12px;
`;

const Table = styled.table`
  font-family: arial, sans-serif;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  margin-top: -10px;
  text-align: left;
  margin-top: 40px;

  td:first-child {
    border-left-style: solid;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  td:last-child {
    border-right-style: solid;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }

  td {
    text-align: center;
    color: #606060;
    font-weight: 300;
    border: solid 1px #fff;
    border-style: solid none;
    padding: 30px 10px;
    background-color: white;
  }

  th {
    text-align: center;
    color: #606060;
    font-weight: 500;
    border: solid 1px #fff;
    border-style: solid none;
    padding: 10px;
    background-color: white;
  }
`;

const Select = styled.select`
  padding: 8px 16px;
  border: none;
  box-shadow: 2px 2px 6px rgba(202, 150, 229, 0.3);
  border-radius: 25px;
  cursor: pointer;
  color: #606060;

  &:hover {
    border: none;
    outline: none;
  }

  &:active {
    border: none;
    outline: none;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

const Button = styled.button`
  box-shadow: 2px 2px 6px rgba(202, 150, 229, 0.3);
  border-radius: 25px;
  background: white;
  padding: 8px 16px 8px 8px;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #606060;

  span {
    background: #a751d4;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    font-size: 20px;
    color: white;
    margin-right: 7px;
  }
`;

const Main = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px;
  flex: 1;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 38px;
`;


export default MainBody;