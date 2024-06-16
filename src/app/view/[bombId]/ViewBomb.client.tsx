"use client";
import FileUpload, { UploadType } from "@/components/FileUpload";
import HFlex from "@/components/HFlex";
import Input from "@/components/Input";
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor";
import { P } from "@/components/Text";
import VFlex from "@/components/VFlex";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Compact } from "@uiw/react-color";
import ColorCircle from "@/components/ColorCircle";
import Button from "@/components/Button";
import { Bomb } from "@prisma/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassStart, faCircleCheck, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { cn } from "@/utils";
import { debounce } from "lodash";
import Link from "next/link";

enum SaveState {
  SAVING,
  SAVED,
  ERROR,
  NONE,
}

type SaveStateProperties = {
  text: string;
  icon: IconDefinition;
  color: string;
};

const saveStateMap: Record<SaveState, SaveStateProperties> = {
  [SaveState.SAVING]: {
    text: "Saving...",
    icon: faHourglassStart,
    color: "text-success",
  },
  [SaveState.SAVED]: {
    text: "Saved",
    icon: faCircleCheck,
    color: "text-success",
  },
  [SaveState.ERROR]: {
    text: "Error",
    icon: faTriangleExclamation,
    color: "text-error",
  },
  [SaveState.NONE]: {
    text: "",
    icon: faCircleCheck,
    color: "",
  },
};

type Props = {
  bomb: Bomb;
};

export default function ViewBomb({ bomb }: Props) {
  // TODO(connor): confetti triple blast
  // TODO(connor): dark lights (spotlights like a club) and then rise and shine with open envelope
  // TODO(connor): figure out way to remove nav bar from view bomb page and home page
  // TODO(connor): framer motion
  // TODO(connor): Confetti bomb - maybe ditch envelope entirely and just fade it in out? Allow for multiple pages of text? Write down pro tips from fire ship tutorial on framer mo589!  (clamp width 6:55, and transparent hex before that)
  // TODO(connor): build it from scratch? get realistic images of paper + envelope

  return <div>hi</div>;
}
