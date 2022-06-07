import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import "./modalbutton.css"



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = React.useState(props.data);

  React.useEffect(() => {
    setData(props.data)
  }, [props.data]);

  return (
    <div>
      <Button onClick={handleOpen} id="botao">Ver dados</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div id='box'>
                <h2>ID: {data?.id}</h2>
                <h2>Posição: {data?.posicao}</h2>
                <h2>Titulo: {data?.titulo}</h2>
                <h2>Cor Texto: {data?.corTexto}</h2>
                <h2>Url Fundo: {data?.urlFundo}</h2>
                <h2>Descricao: {data?.descricao}</h2>
                <h2>Texto Link: {data?.textoLink}</h2>
                <h2>Url Link: {data?.urlLink}</h2>
                <h2>Cor Fundo Link: {data?.corFundoLink}</h2>
                <h2>Cor Texto Link: {data?.corTextoLink}</h2>
            </div>
        </Box>
      </Modal>
    </div>
  );
}