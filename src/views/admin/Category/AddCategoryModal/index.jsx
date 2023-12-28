import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Spacer,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";


import FormInput from "components/FormInput";
import { validationNewCategorySchema } from "../form.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingScreen from "components/LoadingScreen";
import { useAddCategory } from "../hooks/useQuery";

const AddCategoryModel = ({ show, handleCancel }) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(validationNewCategorySchema),
        defaultValues: {
            name: undefined,
            slug: undefined
        },
    });

    const { mutate, isLoading } = useAddCategory((res) => {
        toast("Thêm danh mục thành công", {
            position: "top-right",
            type: "success",
            hideProgressBar: true,
        });
        reset();
        handleCancel(res._id);
    });

    const onSubmit = (values) => {
        mutate(values);
    };

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <Modal isOpen={show} onClose={handleCancel}>
            <ModalOverlay />
            <ModalContent m="auto">
                <ModalBody p="8">
                    <Controller
                        control={control}
                        name="name"
                        render={({ field }) => (
                            <FormInput
                                value={field.value}
                                onChange={field.onChange}
                                type="text"
                                label="Tên danh mục"
                                error={errors.name}
                            />
                        )}
                    />
                    <Spacer h="6" />
                    <Controller
                        control={control}
                        name="slug"
                        render={({ field }) => (
                            <FormInput
                                value={field.value}
                                onChange={field.onChange}
                                type="text"
                                label="Tên rút gọn"
                                error={errors.slug}
                            />
                        )}
                    />
                    <Spacer h="6" />
                    <Flex justifyItems="flex-end" gap="8">
                        <Button variant="outline" onClick={() => handleCancel()} flex="1">
                            Hủy
                        </Button>
                        <Button flex="1" onClick={handleSubmit(onSubmit)}>
                            {" "}
                            Lưu
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default AddCategoryModel;