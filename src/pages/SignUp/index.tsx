import { Grid, TextField } from '@mui/material';
import { Container, FormSign } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Button from '@mui/material/Button';

export function SignUp() {
    return (
        <>
            <Header />
            <hr></hr>
            <Container>
                <FormSign>
                    <Grid container direction={"column"} spacing={3.5} marginTop={2} marginBottom={5}>
                        <Grid item>
                            <TextField
                                required
                                id="user_name"
                                label="Nome"
                                variant="outlined"
                                sx={{
                                    "& label": {
                                        textAlign: "start"
                                    }
                                }}
                            />
                        </Grid>
                        {/* <Grid item>
                            <TextField
                                required
                                id="user_password"
                                label="Senha"
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                                sx={{
                                    "& label": {
                                        textAlign: "start"
                                    }
                                }}
                            />
                        </Grid> */}
                        {/* <Grid item>
                            <TextField
                                required
                                id="user_repeat_password"
                                label="Confirma Senha"
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                                sx={{
                                    "& label": {
                                        textAlign: "start"
                                    }
                                }}
                            />
                        </Grid> */}
                        <Grid item>
                            <TextField
                                id="user_email"
                                label="Email"
                                variant="outlined"
                                sx={{
                                    "& label": {
                                        textAlign: "start"
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="user_birthday"
                                label="Data de nascimento"
                                placeholder='dd/mm/aaaa'
                                variant="outlined"
                                sx={{
                                    "& label": {
                                        textAlign: "start"
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" style={{ background: "rgb(94, 93, 240)" }}>Cadastrar</Button>
                        </Grid>
                    </Grid>
                </FormSign>
            </Container>
            <Footer />
        </>
    )
}