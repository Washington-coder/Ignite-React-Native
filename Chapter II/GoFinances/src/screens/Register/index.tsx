import React, { useState } from 'react';
import { Modal } from "react-native";

import { Input } from "../../components/Form/Input"
import { Button } from "../../components/Form/Button"
import { TransactionTypeButton } from "../../components/TransactionTypeButton"
import { CategorySelectButton } from "../../components/CategorySelectButton"

import { CategorySelect } from "../CategorySelect"

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes,
} from "./styles"

export function Register() {
    const [transactionType, setTransactionType] = useState("");
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const [category, setCategory] = useState({
        key: "category",
        name: "Categoria",
    });

    function handleTransactionTypeSelect(type: "up" | "down") {
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    function handleRegister() {
        const data = {
            name,
            amount,
            transactionType,
            category: category.key
        }
        console.log(data);
    }

    function handleInputChance(text: string) {
        console.log(text);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input
                        placeholder="Nome"
                        onChangeText={setName}
                    />

                    <Input
                        placeholder="Preço"
                        onChangeText={setAmount}
                    />
                    <TransactionTypes>
                        <TransactionTypeButton
                            type="up"
                            title="Income"
                            onPress={() => handleTransactionTypeSelect("up")}
                            isActive={transactionType === "up"}
                        />
                        <TransactionTypeButton
                            type="down"
                            title="Outcome"
                            onPress={() => handleTransactionTypeSelect("down")}
                            isActive={transactionType === "down"}
                        />
                    </TransactionTypes>

                    <CategorySelectButton
                        title={category.name}
                        onPress={handleOpenSelectCategoryModal}
                    />
                </Fields>

                <Button
                    title="Enviar"
                    onPress={handleRegister}
                />
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>
        </Container>
    );
}