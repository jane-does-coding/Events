"use client";
import useEventModal from "@/app/hooks/useEventModal";
import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Modal from "./Modal";
import Input from "../Inputs/Input";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const EventModal = () => {
	const eventModal = useEventModal();
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			title: "",
			oneline: "",
			description: "",
			date: "",
			location: "", // New field
			contactEmail: "", // New field
			contactPhone: "", // New field
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);

		try {
			await axios.post("/api/events/", data);

			eventModal.onClose();
			setIsLoading(false);

			toast.success("Event created successfully!");
			router.push("/"); // Adjust the route to where you want to redirect after event creation
			router.refresh();
		} catch (err) {
			console.log(err);
			toast.error("Failed to create event. Please try again.");
			setIsLoading(false);
		}
	};

	const bodyContent = (
		<div className="flex flex-col gap-3">
			<Input
				id="title"
				label="Event Title"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
			/>
			<Input
				id="oneline"
				label="One Line"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
			/>
			<Input
				id="description"
				label="Event Description"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
			/>
			<div className="flex gap-2">
				<Input
					id="date"
					label="Event Date"
					type="date"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
				<Input
					id="location"
					label="Location"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
			</div>
			<div className="flex gap-2">
				<Input
					id="contactEmail"
					label="Contact Email"
					type="email"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
				<Input
					id="contactPhone"
					label="Contact Phone"
					type="tel"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={eventModal.isOpen}
			title="Create Event"
			actionLabel="Create"
			onClose={eventModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
		/>
	);
};

export default EventModal;
