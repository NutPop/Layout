import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
<>
      <div className="container">

        <div className="row">
          <div className="col-md-12 text-center bg-primary p-5">
            ROW 1 : COLUMN 1
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 text-center bg-warning p-5">
            ROW 2 : COLUMN 1
          </div>
          <div className="col-md-6 text-center bg-success p-5">
            ROW 2 : COLUMN 2
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center bg-info p-5">
            FOOTER
          </div>
        </div>

      </div>
</>
  );
}
