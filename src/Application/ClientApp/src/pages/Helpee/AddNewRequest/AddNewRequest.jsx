import React from "react";
import { Container, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import NavBar from "../NavBar/NavBar";
import routes from '../../../routes';
import axios from 'axios';
import { useHistory } from "react-router-dom";

export const AddNewRequest = (props) => {
  const [value, setValue] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const categories = ["Do shopping", "Get medicine", "Take a pet for a walk"];
  const history = useHistory();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const onSubmit = () => {
    axios.post(routes.api.requests, {
      title: selectedCategory,
      description: value
    }).then(x => {
      history.push("/helpee/");
    });
  };

  return (
    <>
      <Container maxWidth={"sm"}>
        <form noValidate>
          <StyledTypography color="textPrimary" variant="h6">
            Add new request!
        </StyledTypography>
          <DescriptionTextField
            id="outlined-multiline-flexible"
            //label="Description"
            multiline
            placeholder="Describe what support you need"
            rowsMax={4}
            value={value}
            onChange={handleChange}
            variant="outlined"
          />
          <Box mt={2} />
          <Typography>Choose category</Typography>
          <SelectCategory
            variant="outlined"
            label="Select category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <MenuItem value={category}>{category}</MenuItem>
            ))}
          </SelectCategory>
          <Box mt={2} />
          <Typography>Set deadline</Typography>
          <Box mt={2} />
          {/* <DateBox clone>
            <TextField
              id="date"
              type="date"
              variant="outlined"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </DateBox> */}
          <ButtonBox>
            <Button type="submit" variant="contained" color="primary" onClick={() => onSubmit()}>
              POST
          </Button>
          </ButtonBox>
        </form>
      </Container>
      <NavBar />
    </>
  );
};

const DescriptionTextField = styled(TextField)`
  width: 100%;
`;

const SelectCategory = styled(Select)`
  width: 100%;
  margin-top: 1rem;
`;

const StyledTypography = styled(Typography)`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const DateBox = styled(Box)`
  width: 100%;
`;

const ButtonBox = styled(Box)`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
