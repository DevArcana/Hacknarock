import React from "react";
import { Container, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import "date-fns";
import Button from "@material-ui/core/Button";

export const Home = (props) => {
  const [value, setValue] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const categories = ["Do shopping", "Get medicine", "Take a pet for a walk"];
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <Container maxWidth={"sm"}>
        <StyledTypography color="textPrimary" variant="subtitle1">
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
        <DateBox clone>
          <TextField
            id="date"
            type="date"
            variant="outlined"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DateBox>
        <ButtonBox>
          <Button variant="contained" color="primary">
            POST
          </Button>
        </ButtonBox>
      </Container>
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
