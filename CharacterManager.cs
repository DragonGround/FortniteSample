using System;
using System.Collections;
using UnityEngine;
using Random = UnityEngine.Random;

namespace FortniteSample {
    /// <summary>
    /// Sample Character Manager that just fire events randomly.
    /// </summary>
    public class CharacterManager : MonoBehaviour {
        public event Action<float> OnHealthChanged;
        public event Action<int> OnSlotIndexChanged;

        float _health = 100f;
        int _slotIndex = 0;

        void Start() {
            StartCoroutine(ChangeHealthCo());
            StartCoroutine(ChangeSlotIndexCo());
        }

        public float GetHealth() {
            return _health;
        }

        public int GetSlotIndex() {
            return _slotIndex;
        }

        IEnumerator ChangeHealthCo() {
            var waitTime = Random.Range(1f, 5f);
            yield return new WaitForSeconds(waitTime);
            ChangeHealth();
        }

        void ChangeHealth() {
            var hp = _health;
            while (Mathf.Abs(hp - _health) < 20) { // Roll a number that's different from the current value
                hp = Random.Range(0, 100);
            }
            _health = hp;
            OnHealthChanged?.Invoke(_health);
            StartCoroutine(ChangeHealthCo());
        }

        IEnumerator ChangeSlotIndexCo() {
            var waitTime = Random.Range(1f, 5f);
            yield return new WaitForSeconds(waitTime);
            ChangeSlotIndex();
        }

        void ChangeSlotIndex() {
            var index = _slotIndex;
            while (index == _slotIndex) { // Roll a number that's different from the current value
                index = Random.Range(0, 3);
            }
            _slotIndex = index;
            OnSlotIndexChanged?.Invoke(_slotIndex);
            StartCoroutine(ChangeSlotIndexCo());
        }
    }
}