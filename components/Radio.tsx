import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export type optionType = { id: number; label: string; value: string | number; icon?: keyof typeof Ionicons.glyphMap; color?: string }

type RadioProps = {
  options: optionType[];
  defaultValueIndex?: number;
  onValueChange: (value: optionType, index: number) => void;
  disabled?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  radioButtonStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  orientation?: 'horizontal' | 'vertical';
  activeColor?: string;
  inactiveColor?: string;
  size?: number;
  error?: string;
};

const Radio: React.FC<RadioProps> = ({
  options,
  defaultValueIndex = 0,
  onValueChange,
  disabled = false,
  labelStyle,
  radioButtonStyle,
  itemContainerStyle,
  orientation = 'vertical',
  activeColor,
  inactiveColor,
  size = 24,
  error,
}) => {

  const checkForDuplicates = (options: optionType[]) => {
    if (options.length < 1) {
      throw new Error(`Options Array must be atleast one Object value!!!`);
    }

    const seenIds = new Set();
    const seenValues = new Set();

    for (let option of options) {
      if (seenIds.has(option.id)) {
        throw new Error(`Duplicate id found: ${option.id}`);
      }
      if (seenValues.has(option.value)) {
        throw new Error(`Duplicate value found: ${option.value}`);
      }

      seenIds.add(option.id);
      seenValues.add(option.value);
    }
  };

  useEffect(() => {
    try {
      checkForDuplicates(options);
    } catch (error) {
      console.error(error);
    }
  }, [options]);

  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [selectedOption, setSelectedOption] = useState<optionType>(options[defaultValueIndex] || options[0]);

  useEffect(() => {
    if (options.length > 0 && options[defaultValueIndex]) {
      setSelectedOption(options[defaultValueIndex]);
    }
  }, [options, defaultValueIndex]);

  const activeBtnColor = activeColor || colors.tint;
  const inactiveBtnColor = inactiveColor || colors.tabIconDefault;

  const getRadioButtonColor = useCallback((isSelected: boolean) => {
    return isSelected ? selectedOption?.color || activeBtnColor : inactiveBtnColor;
  }, [selectedOption, activeBtnColor, inactiveBtnColor]);

  const getRadioInnerCircleColor = useCallback((isSelected: boolean) => {
    return isSelected ? selectedOption?.color || activeBtnColor : 'transparent';
  }, [selectedOption, activeBtnColor]);

  const handlePress = useCallback((opt: optionType, index: number) => {
    if (selectedOption.value !== opt.value) {
      setSelectedOption(opt);
      onValueChange(opt, index);
    }
  }, [selectedOption, onValueChange]);

  return (
    <View style={[styles.container, orientation === 'horizontal' ? styles.row : styles.column]}>
      {options.length > 0 && options.map((option, index) => (
        <TouchableOpacity
          key={`${index}${option.value}`}
          style={[styles.item, itemContainerStyle]}
          onPress={() => handlePress(option, index)}
          disabled={disabled}
        >
          <View
            style={[styles.radioButton, radioButtonStyle, {
              borderColor: getRadioButtonColor(selectedOption.value === option.value),
              width: size,
              height: size,
              borderRadius: size / 2,
            }]}
          >
            {
              selectedOption?.icon ? (
                <Ionicons name={selectedOption?.icon || "add"} size={size * 0.7} color={getRadioInnerCircleColor(selectedOption.value === option.value || selectedOption.id === option.id)} />
              ) : (
                <View
                  style={[
                    styles.innerCircle,
                    {
                      backgroundColor: getRadioInnerCircleColor(selectedOption.value === option.value || selectedOption.id === option.id),
                      width: size / 2,
                      height: size / 2,
                      borderRadius: size / 4,
                    },
                  ]}
                />
              )
            }
          </View>

          <Text style={[styles.label, labelStyle, { color: disabled ? '#B0B0B0' : colors.text }]}>
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  radioButton: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  innerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  error: {
    color: 'red',
    marginTop: 8,
    fontSize: 12,
  },
  iconContainer: {
    marginLeft: 8,
  },
});

export default Radio;
