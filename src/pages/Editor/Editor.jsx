import React, { useState, useEffect } from "react";

import styles from "./style.module.scss";

import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";

import EditContextProvider from "./containers/editContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Settings from "./sections/Settings/Settings.jsx";
import Output from "./sections/OutputComponent/Output";

import ScrollToTop from "../../components/ScrollToTopButton/ScrollToTopButton";
import { Button, Input, Label } from "reactstrap";

function Editor() {
	const [pageCount, setPageCount] = useState(1);
	const [currentPageNo, setCurrentPageNo] = useState(1);

	useEffect(() => {
		if (currentPageNo > pageCount) setCurrentPageNo(prev => prev - 1);
	}, [pageCount, currentPageNo]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<MetaComponent
				title={metaData.editor.title}
				description={metaData.editor.description}
				keywords={metaData.editor.keywords}
			/>
			<div className={styles.dscCommunity}>
				<EditContextProvider>
					<Settings />
					<div className={styles.pageBtnsWrapper}>
						<Button
							outline
							color="primary"
							disabled={currentPageNo === 1}
							onClick={() => setCurrentPageNo(prev => prev - 1)}
						>
							Previous Page
						</Button>
						<Label>
							Current Page No.
							<Input
								type="number"
								max={pageCount}
								min="1"
								step="1"
								value={currentPageNo}
								onInput={e => setCurrentPageNo(parseInt(e.target.value))}
							/>
						</Label>
						<Button
							outline
							color="primary"
							disabled={currentPageNo === pageCount}
							onClick={() => setCurrentPageNo(prev => prev + 1)}
						>
							Next Page
						</Button>
					</div>
					{[...Array(pageCount)].map((e, i) => (
						<Output key={i + 1} pageNo={i + 1} show={i + 1 === currentPageNo} />
					))}
				</EditContextProvider>
			</div>
			<div className={styles.btnWrapper}>
				<ScrollToTop />
			</div>
			<div className={styles.pageBtnsWrapper}>
				<Button
					outline
					color="primary"
					onClick={() => setPageCount(prev => prev + 1)}
				>
					Add Page at the End
				</Button>
				<Button
					outline
					color="primary"
					disabled={pageCount === 1}
					onClick={() => setPageCount(prev => prev - 1)}
				>
					Remove Last Page
				</Button>
			</div>
		</>
	);
}
export default Editor;
